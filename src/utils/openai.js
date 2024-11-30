// import OpenAI from "openai";
// import { OPENAI_KEY } from "./constants";
// const client = new OpenAI({
//   apiKey: OPENAI_KEY,
//   dangerouslyAllowBrowser: true,
// });

// export default client;
import { GROQ_KEY } from "./constants";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: GROQ_KEY,
  dangerouslyAllowBrowser: true,
});
export default groq;
