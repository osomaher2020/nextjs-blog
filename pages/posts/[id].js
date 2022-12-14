import Head from "next/head"
import Link from "next/link"
import Date from "../../components/date"
import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"

import utilStyles from "../../styles/utils.module.css"


// *******    getStaticProps & getStaticPaths     run only on the server-side
// --- so you can write code such as direct database queries without sending them to browsers


// gets all possible post_ids
export async function getStaticPaths() {

    const paths = await getAllPostIds()

    return {
        paths,
        fallback: false
    }

}


// fetches Data foreach post_id
export async function getStaticProps({ params }) {

    const postData = await getPostData(params.id)

    const online_url = process.env.HOST
    console.log(`from server side: ${online_url}`)

    return {
        props: {
            postData
        }
    }
}

const Post = ({ postData }) => {

    const online_url = process.env.HOST
    console.log(`from browser side: ${online_url}`)

    return (
        <Layout>

            <Head>
                <title>{postData.title}</title>
            </Head>

            <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>

            {/* <h3>{online_url}</h3>   ----- can not be used in HTML browser code */}
            <h3>{process.env.NEXT_PUBLIC_HOST}</h3>

            <p>{postData.id}</p>

            {/* <p>{postData.date}</p> */}
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>

            <i>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </i>
            <hr />
            <h2>
                <Link href="/posts">Back to Posts</Link>
            </h2>
        </Layout>
    )
}

export default Post