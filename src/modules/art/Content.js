import React from "react";

import { getArt } from "../../api";

import { createResource } from "../../createResource";

import { ArtInfo, Input, InputContainer, Avatar } from "./styles";

const artResource = createResource(ms => getArt(ms));

export const Content = () => {
  const art = artResource.read(2000);

  return (
    <ArtInfo>
      <h1>{art.name}</h1>
      <h3>Author: {art.author}</h3>
      <h3>Location: {art.city}</h3>
      <h3>Tags: {art.tags}</h3>
      <h3>Link: {art.link}</h3>
      <h3>{art.description}</h3>
      <InputContainer>
        <Avatar
          src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-5-512.png"
          alt="avatar"
        />
        <Input />
      </InputContainer>
    </ArtInfo>
  );
};
