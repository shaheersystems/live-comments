import CommentBox from "./comment-box";
import { motion, AnimatePresence } from "framer-motion";
type CommentType = {
  id: number;
  text: string;
  createdAt: string;
  author: {
    id: string;
    name: string;
  };
};
type CommentListProps = {
  comments: CommentType[];
};
const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="space-y-4">
      <div className="">
        <h2 className="text-lg font-semibold">Comments ({comments.length})</h2>
      </div>
      <AnimatePresence initial={false}>
        {comments.reverse().map((comment) => (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0, overflow: "hidden" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            key={comment.id}
            className="relative"
          >
            <CommentBox key={comment.id} data={comment} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CommentList;
