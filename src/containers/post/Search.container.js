import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import client from "../../lib/api/client";
import useStore from "../../modules/store";
import List from "../../components/Post/List";
import Loader from "../../components/Common/Loader";

const SearchContainer = () => {
  const { search } = useLocation();
  const setCategory = useStore((state) => state.setCategory);

  const searchPosts = async () => {
    const res = await client.get(`/api/posts/search${search}`);
    return res.data;
  };

  const { isLoading, data, error } = useQuery(
    ["searchPosts", search],
    searchPosts
  );

  useEffect(() => {
    setCategory("");
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      <List data={data} />
    </>
  );
};

export default SearchContainer;
