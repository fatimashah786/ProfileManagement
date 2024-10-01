import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_QUOTES } from "../gqloperations/queries";
import { Link } from "react-router-dom";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  if (loading) return <h1>loading</h1>;

  if (error) {
    console.log(error.message);
  }

  if (data.quotes.length === 0) {
    return <h4>No quotes available</h4>;
  }
  console.log(data);
  return (
    <div className="container">
      {data.quotes.map((quote) => {
        return (
          <blockquote>
            <h6>{quote.name}</h6>
            <Link to={`/profile/${quote.by._id}`}>
              <p className="right-align">~{quote.by.firstName}</p>
            </Link>
          </blockquote>
        );
      })}
    </div>
  );
}
