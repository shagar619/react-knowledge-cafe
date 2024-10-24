import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, reading_time, author, author_img, posted_date, hashtags, id} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`Cover Picture of the title ${title}`} />

            <div className='flex justify-between mb-6'>
                <div className='flex items-center'>
                    <img className='w-[60px]' src={author_img} alt="" />
                    <div className='ml-6'>

                        <h3 className='text-black text-2xl font-bold'>{author}</h3>
                        <p className='text-base font-medium'>{posted_date}</p>

                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>

            <h2 className='text-4xl font-bold mb-5'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id,reading_time)}
             className='my-6 underline text-[#6047EC] text-lg font-semibold hover:text-black'>Mark As Read</button>

            <br />
            <hr />
        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}

export default Blog;