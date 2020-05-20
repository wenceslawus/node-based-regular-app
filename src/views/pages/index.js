import React from 'react'
import Layout from '../layouts/layout'
import Table from "./table";
import axios from "axios";

export default function Home({users}) {
    return (
        <Layout title="Home | Express + Next.js" >
            <Table users={users}></Table>
        </Layout>
    )
}

export async function getInitialProps() {

    //@TODO data from axios doesn't available

    const res = await axios.get(`http://${process.env.HOSTNAME}:${process.env.PORT}/api/user/`);
    const users = await res.data
    return {
        props: {
            users
        },
    }
}

