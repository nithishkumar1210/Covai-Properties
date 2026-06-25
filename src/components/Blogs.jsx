import React from 'react';
import { User, MessageSquare, ArrowRight } from 'lucide-react';
import blog1 from '../assets/project_residential.png';
import blog2 from '../assets/project_commercial.png';
import blog3 from '../assets/project_industrial.png';

export default function Blogs() {
  const blogsData = [
    {
      id: 1,
      image: blog1,
      date: { day: '24', month: 'Jun' },
      author: 'Admin',
      comments: '4',
      title: 'Understanding Vastu Shastra for Modern Villa Layouts',
      desc: 'Learn the core spatial layout principles that guarantee natural air flow, lighting, and positive energy in your custom home.'
    },
    {
      id: 2,
      image: blog2,
      date: { day: '18', month: 'May' },
      author: 'Architect',
      comments: '2',
      title: 'Top Construction Materials for Durability in Coastal Areas',
      desc: 'A comprehensive review of corrosion-resistant TMT steel, marine cements, and coatings needed to resist saline humidity.'
    },
    {
      id: 3,
      image: blog3,
      date: { day: '05', month: 'Apr' },
      author: 'Engineer',
      comments: '7',
      title: 'How Turnkey Construction Speeds Up Commercial Projects',
      desc: 'Discover why shifting planning, blueprint licensing, structural framing, and finishing under one coordinator cuts delivery times.'
    }
  ];

  return (
    <section id="blogs" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Latest News</span>
          <h2 className="section-title">Our Latest Articles & Updates</h2>
        </div>

        <div className="blogs-grid">
          {blogsData.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-card-img">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-date-badge">
                  <span>{blog.date.day}</span>
                  {blog.date.month}
                </div>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <div className="blog-meta-item">
                    <User size={14} />
                    <span>By {blog.author}</span>
                  </div>
                  <div className="blog-meta-item">
                    <MessageSquare size={14} />
                    <span>{blog.comments} Comments</span>
                  </div>
                </div>
                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-card-desc">{blog.desc}</p>
                <a href="#" className="blog-card-link" onClick={(e) => e.preventDefault()}>
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
