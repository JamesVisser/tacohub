import { HttpLink } from "apollo-link-http";


const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";

const config = {
  link: new HttpLink({
    uri: `${API_URL}/graphql`, // Server URL (must be absolute)
  }),
};
export default (config);