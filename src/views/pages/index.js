import React from 'react'
import Layout from '../layouts/layout'
import Table from "./table";
import axios from "axios";

function Home(props) {


    // console.log("INIT1", props.users);
    return (
        <Layout title="Home | Express + Next.js" >
            <Table users={props.users}></Table>
        </Layout>
    )
}


export default Home


export const getServerSideProps = async (ctx) =>{

    //@TODO data from axios doesn't available
    console.log("URL", `http://${process.env.HOSTNAME}:${process.env.PORT}/api/user/`);
    const res = await axios.get(`http://${process.env.HOSTNAME}:${process.env.PORT}/api/user/`);
    const users = await res.data
    return {
        props: {
            users
        },
    }
}


// export async function getServerSideProps() {
//
//     //@TODO data from axios doesn't available
//
//     const res = await axios.get(`http://${process.env.HOSTNAME}:${process.env.PORT}/api/user/`);
//     const users = await res.data
//
//     console.log("INIT2", users);
//     return {
//         props: {
//             users
//         },
//     }
// }


