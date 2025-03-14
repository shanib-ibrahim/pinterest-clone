import EmojiPicker from 'emoji-picker-react';
import Image from '../../components/Image';
import './style.css'
import { useState } from 'react';

const Comments = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="comments">
            <div className="commentList">
                <span className="commentCount">5 comments</span>
                {/* COMMENT */}
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">John Doe</span>
                        <p className='commentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est nulla nemo quaerat recusandae eos voluptatibus facilis, sint aspernatur molestias cum iusto eum suscipit ad architecto iste repellat pariatur saepe.</p>
                        <span className='commentTime'>1h</span>
                    </div>
                </div>
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">John Doe</span>
                        <p className='commentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est nulla nemo quaerat recusandae eos voluptatibus facilis, sint aspernatur molestias cum iusto eum suscipit ad architecto iste repellat pariatur saepe.</p>
                        <span className='commentTime'>1h</span>
                    </div>
                </div>
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">John Doe</span>
                        <p className='commentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est nulla nemo quaerat recusandae eos voluptatibus facilis, sint aspernatur molestias cum iusto eum suscipit ad architecto iste repellat pariatur saepe.</p>
                        <span className='commentTime'>1h</span>
                    </div>
                </div>
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">John Doe</span>
                        <p className='commentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est nulla nemo quaerat recusandae eos voluptatibus facilis, sint aspernatur molestias cum iusto eum suscipit ad architecto iste repellat pariatur saepe.</p>
                        <span className='commentTime'>1h</span>
                    </div>
                </div>
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">John Doe</span>
                        <p className='commentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est nulla nemo quaerat recusandae eos voluptatibus facilis, sint aspernatur molestias cum iusto eum suscipit ad architecto iste repellat pariatur saepe.</p>
                        <span className='commentTime'>1h</span>
                    </div>
                </div>
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">John Doe</span>
                        <p className='commentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est nulla nemo quaerat recusandae eos voluptatibus facilis, sint aspernatur molestias cum iusto eum suscipit ad architecto iste repellat pariatur saepe.</p>
                        <span className='commentTime'>1h</span>
                    </div>
                </div>
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">John Doe</span>
                        <p className='commentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est nulla nemo quaerat recusandae eos voluptatibus facilis, sint aspernatur molestias cum iusto eum suscipit ad architecto iste repellat pariatur saepe.</p>
                        <span className='commentTime'>1h</span>
                    </div>
                </div>
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">John Doe</span>
                        <p className='commentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est nulla nemo quaerat recusandae eos voluptatibus facilis, sint aspernatur molestias cum iusto eum suscipit ad architecto iste repellat pariatur saepe.</p>
                        <span className='commentTime'>1h</span>
                    </div>
                </div>
            </div>
            <form className="commentForm">
                <input type="text" placeholder='Add a comment' />
                <div className="emoji">
                    <div onClick={() => setOpen(prev => !prev)}>😎</div>
                    {open && <div className="emojiPicker"><EmojiPicker /></div>}
                </div>
            </form>
        </div>
    )
}

export default Comments