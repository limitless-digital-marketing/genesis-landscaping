import { Link, useParams } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import { posts } from './BlogPage'
import './BlogPostPage.css'

const BlogPostPage = () => {
  const { slug } = useParams()
  const post = posts.find((entry) => entry.slug === slug)

  return (
    <div className="blog-post-page">
      <section className="blog-post-hero">
        <div className="container blog-post-hero-container">
          <div className="blog-post-tag">Blog</div>
          <h1 className="blog-post-title">{post?.title ?? 'Plumbing Advice'}</h1>
          <p className="blog-post-meta">{post?.date ?? 'McKay’s Plumbing and Gasfitting'}</p>
        </div>
      </section>

      <section className="blog-post-body">
        <div className="container blog-post-body-container">
          <div className="blog-post-content">
            {(post?.sections ?? []).map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
            {!post?.sections?.length && (
              <p>
                We are updating this article. Please check back soon for the full guide.
              </p>
            )}
            <Link className="blog-post-back" to="/blog">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreasSection />
      <CurvedCTASection />
    </div>
  )
}

export default BlogPostPage
