import Link from "next/link"
import Date from "../../components/date"
import Layout from "../../components/layout"
import { getSortedPostsData } from "../../lib/posts"

import utilStyles from "../../styles/utils.module.css"

export async function getStaticProps() {
    const postsData = await getSortedPostsData()

    return {
        props: {
            postsData
        }
    }
}

const Posts = ({ postsData }) => {
    return (
        <Layout home="false">
            <section>
                <h1>Blog</h1>
                <ul>
                    {
                        postsData.map(({ id, title, date }) => (
                            <Link href={`/posts/${id}`} key={id}>
                                <a>
                                    <li className={utilStyles.listItem}>
                                        <h3>{title}</h3>
                                        <p className={utilStyles.lightText}>
                                            {/* {date} */}
                                            <Date dateString={date} />
                                        </p>
                                    </li>
                                </a>
                            </Link>
                        ))
                    }
                </ul>
            </section>
            <hr />
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    )
}

export default Posts