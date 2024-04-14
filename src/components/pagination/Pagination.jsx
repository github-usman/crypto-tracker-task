import React from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TfiFaceSad } from "react-icons/tfi";
import styles from "./pagination.module.css";

const Pagination = ({ setCurrentPage, currentPage, totalPage }) => {
  return (
    <div className={styles.container}>
      {totalPage ? <>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={
          styles[`${currentPage === 1 ? "arrowBtnDisable" : "arrowBtn"}`]
        }
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <span>
          {totalPage && (
            <>
              {Array.from({ length: totalPage }, (_, i) => {
                //FOR Size PAGE IS MORE THAN 6 
                if (currentPage <= 2) {
                  if (i + 1 <= 2) {
                    return (
                      <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : "not-active-page"}`]} >
                        {i + 1}
                      </button>
                    );
                  } else if (i + 1 === 3) {
                    return <><button className={styles[`not-active-page`]}>...</button></>
                  } else if (i + 1 >= totalPage - 1) {
                    return (
                      <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : "not-active-page"}`]}  >
                        {i + 1}
                      </button>
                    );
                  }
                } else if (currentPage <= totalPage - 2) {
                  if (i + 1 === 1) {
                    return (
                      <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : "not-active-page"}`]} >
                        {i + 1}
                      </button>
                    );
                  } else if (i + 1 === 2) {
                    return <><button className={styles[`not-active-page`]}>...</button></>
                  } else if (i + 1 === currentPage - 1 || i + 1 === currentPage + 1 || currentPage === i + 1) {
                    return (
                      <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : "not-active-page"}`]}  >
                        {i + 1}
                      </button>
                    );
                  } else if (i + 1 === totalPage) {
                    return <><button className={styles[`not-active-page`]}>...</button><button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : "not-active-page"}`]}  > {i + 1} </button>
                    </>
                  }
                } else {
                  if (i + 1 <= 2) {
                    return (
                      <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : "not-active-page"}`]} >
                        {i + 1}
                      </button>
                    );
                  } else if (i + 1 === 3) {
                    return <><button className={styles[`not-active-page`]}>...</button></>
                  } else if (i + 1 >= totalPage - 1) {
                    return (
                      <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : "not-active-page"}`]}  >
                        {i + 1}
                      </button>
                    );
                  }
                }
                return null;

              })}
            </>
          )}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= totalPage}
          className={
            styles[`${currentPage >= totalPage ? "arrowBtnDisable" : "arrowBtn"}`]
          }
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </> : <div className={styles.notFound}>
        <TfiFaceSad color="black" size={35} />
        <h5>No Product found in your City, Please try another product</h5>
      </div>
      }
    </div>
  );
};

export default Pagination;