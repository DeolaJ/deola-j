import React from 'react';
import styled from '@emotion/styled';

const BlogWrapper = styled.div`
  margin-bottom: 1rem;

  a {
    color: rgb(31, 32, 68);
  }
`;

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      title: "How to create an Image Uploader using React and Cloudinary",
      link: "https://medium.com/frontend-digest/how-to-create-an-image-uploader-using-react-and-cloudinary-5f07959723c4?source=your_stories_page---------------------------"
    },
    {
      id: 2,
      title: "Creating A Simple Collapsible Sidebar with JavaScript (No Framework Required)",
      link: "https://blog.formpl.us/creating-a-simple-collapsible-sidebar-with-javascript-no-framework-required-af9f8265d156?source=your_stories_page---------------------------"
    },
    {
      id: 3,
      title: "How to Create a Simple Cookie Consent Pop-up for your Website",
      link: "https://blog.formpl.us/how-to-create-a-simple-cookie-consent-pop-up-for-your-website-dad17a174b60?source=your_stories_page---------------------------"
    }
  ]
  return (
    <section className="section">
      <h3 className="section-title">Blog posts</h3>
      <h2 className="section-title-sub">My published articles</h2>
      {
        posts.map(post => (
          <BlogWrapper key={post.id}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <h4>{post.title}</h4>
            </a>
          </BlogWrapper>
        ))
      }
    </section>
  );
};

export default BlogPosts;