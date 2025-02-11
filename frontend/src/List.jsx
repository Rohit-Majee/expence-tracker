import { motion } from "framer-motion";

function List(props) {
  return (
    <>
      <motion.div
        className="transaction"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="datetime">{props.date}</div>
        <div className="name">{props.name}</div>
        <div className={"price " + (props.price > 0 ? "green" : "red")}>
          {props.price}
        </div>
        <button
          type="submit"
          className="submit-btn"
          onClick={() => props.deleteExpense(props.id)}
        >
          X
        </button>
      </motion.div>
    </>
  );
}

export default List;
