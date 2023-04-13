import { useState } from "react";
// import axios from "axios";
import { useWilders } from "../contexts/WildersContext";
import { gql, useMutation } from "@apollo/client";

const ADD_WILDER = gql`
  mutation AddWilder($city: String!, $name: String!) {
    addWilder(city: $city, name: $name) {
      id
      city
      name
    }
  }
`;

export default function AddWilderForm() {
  const { fetchData } = useWilders();
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [addWilder, { loading }] = useMutation(ADD_WILDER);

  return (
    <form
      className="container"
      onSubmit={async (e) => {
        e.preventDefault();
        await addWilder({
          variables: { name, city },
        });
        setName("");
        setCity("");
        fetchData();
      }}
    >
      <div>
        <label htmlFor="name">Name </label>
        <input
          id="name"
          type="text"
          placeholder="Charlie Chaplin"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="city">City </label>
        <input
          id="city"
          type="text"
          placeholder="London"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>

      <button disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
    </form>
  );
}
