import * as React from "react";
import { Layout } from "../components/Layout";
import { ButtonFull } from "../components/ButtonFull";
// markup
const IndexPage = () => {
  return (
    <div>
      <Layout>
        <main className="flex items-center">
          <div className="w-1/2 flex flex-col">
            <h1 className="text-5xl font-bold mb-5">
              Data to enrich your <br />{" "}
              <span className="text-indigo-700">online business</span>
            </h1>
            <p className="w-3/4 text-gray-400 mb-10">
              Keep easily track of your metrics to scale up
              <strong> your business to the moon</strong> whitout any overhead.
              Stay on focused on <strong>what's important</strong> and let us
              take charge of your data.
            </p>

            <ButtonFull name="Create a store" link="#" />
          </div>

          <img
            className="w-1/2 rounded-xl shadow-2xl "
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"></img>
        </main>
      </Layout>
    </div>
  );
};

export default IndexPage;
