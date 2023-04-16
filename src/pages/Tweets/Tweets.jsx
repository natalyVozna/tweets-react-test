import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Gallery,
  GoBack,
  Head,
  StyledButton,
} from "./Tweets.styled";
import TweetCard from "../../components/TweetCard/TweetCard";
import Select from "../../components/Select/Select";
import { getFilteredUsers, getUsers } from "../../services/api";
import { Loader } from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const isFollowing = searchParams.get("isFollowing") ?? "";
  const page = searchParams.get("page") ?? 1;
  const [pageCur, setPageCur] = useState(+page);
  const [hideBtn, setHideBtn] = useState(false);
  const galleryRef = useRef();

  const updateData = (data) => {
    if (data.length < 8) {
      setHideBtn(true);
    }

    setUsers((prev) => {
      if (pageCur !== 1 && pageCur !== "1") {
        return [...prev, ...data];
      } else {
        return [...data];
      }
    });

    setLoading(false);
  };

  // eslint-disable-next-line
  useEffect(() => {
    getUsers({ page: page }).then(updateData);
  }, []);

  useEffect(() => {
    setLoading(true);
    setPageCur(page);
    if (page === 1 || page === "1") {
      setUsers([]);
      setHideBtn(false);
    }
    if (isFollowing !== "" && isFollowing !== "all") {
      getFilteredUsers({
        page: page,
        isFollowing: isFollowing,
      }).then(updateData);
    } else {
      getUsers({ page: page }).then(updateData);
    }
    // eslint-disable-next-line
  }, [isFollowing, page]);

  useEffect(() => {
    if (users.length > 0) {
      if (galleryRef.current) {
        window.scrollTo({
          top: galleryRef.current.getBoundingClientRect().height + 100,
          left: 100,
          behavior: "smooth",
        });
      }
    }
  }, [users]);

  const onLoadMore = (e) => {
    e.preventDefault();
    setPageCur((prev) => +prev + 1);
    if (isFollowing) {
      setSearchParams({ isFollowing, page: +page + 1 });
    } else {
      setSearchParams({ page: +page + 1 });
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Head>
        <GoBack to={"/"}>&#8592; Go back</GoBack>
        <Select />
      </Head>

      <Gallery ref={galleryRef}>
        {users?.map((user) => (
          <TweetCard key={user.id} user={user} />
        ))}
      </Gallery>
      {!hideBtn && (
        <StyledButton type="button" onClick={onLoadMore}>
          Load More
        </StyledButton>
      )}
    </Container>
  );
};

export default Tweets;
