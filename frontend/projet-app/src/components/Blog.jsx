import "../Css/blog.css";
export default function Blog({blog }) {
  console.log("Props received:", { blog });
  return (
    <div className="blog-main">
      <div className="blog-body">
        
        <div className="blogcard">
          <div className="leftcard">
            <img
              src="https://th.bing.com/th/id/R.2b88111fa5e960ac3abbcf8661454678?rik=nDmQd3Q5yN7iEQ&pid=ImgRaw&r=0"
              alt="blog"
            />
          </div>
          <div className="rightcard">
            <h2>{blog.title}</h2>
            <p>
              {blog.body}
            </p>
            <h4>
              thnk you for reading this blog. If you have any questions or
              comments, feel free to contact us.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
