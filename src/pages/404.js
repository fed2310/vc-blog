import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const NotFoundPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Error 404</h1>
                <section className="content-body" style={{marginBottom:"50px"}}>
                    We’re sorry! The page you have looked for does not exist.<br/> Please <Link to="/" style={{color:"#5b3b97"}}>return home</Link> to start over
                </section>
            </article>
        </div>
    </Layout>
)

export default NotFoundPage
