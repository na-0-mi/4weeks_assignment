import React from "react";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import Form from "../../src/features/Form"
import List from "../../src/features/List";

const Home = () => {
return (
    <Layout>
        <Header />
        <Form />
        <List />
    </Layout>
);
};

export default Home;
