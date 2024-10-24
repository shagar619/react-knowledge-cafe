import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-100 m-6 rounded-lg">

          <div className='mt-4 bg-[#c8c1f39f] p-3 m-6 rounded-lg border'>
          <h3 className='text-[#6047EC] text-2xl text-center  font-bold'>Spent time on read : {readingTime} min</h3>
          </div>


            <h2 className="text-2xl mt-8 text-center font-bold">BookMarked Blogs : {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks;