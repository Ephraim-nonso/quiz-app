import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import BaseLayout from "../../layouts/BaseLayout";
import { getQuizList } from "../../store/actions/quiz";
import quiz_img from "../../assets/images/quiz-img.jpg";

function Dashboard({ getQuizList, quiz_list }) {
  useEffect(() => {
    getQuizList();
  }, []);

  let average = 56;
  let total_quiz = 10;
  let quiz_completed = 0;

  document.title = "Dashboard -  Quiz App";
  return (
    <BaseLayout>
      <main className="text-black flex flex-col bg-[#fffaf2] place-content-center place-items-center">
        <div className="flex flex-col sm:flex-row-reverse place-items-center place-content-center justify-between">
          <section className="relative my-4">
            <img
              src={quiz_img}
              alt="profile image"
              className="rounded-full w-44 h-44"
            />
            <form className="absolute bottom-2 right-2">
              <label
                htmlFor="profile-picture"
                className="rounded-full shadow-md bg-[#eeeeee] p-3 cursor-pointer transition duration-500 hover:bg-[#d3d3d3]"
              >
                <i className="fas fa-pencil-alt"></i>
              </label>
              <input
                type="file"
                name="profile-pic"
                id="profile-picture"
                disabled
              />
            </form>
          </section>
          <section className="grid grid-cols-1 justify-evenly my-4 space-y-4 space-x-4 place-items-center place-content-center sm:mr-24 shadow-md bg-white p-6">
            <div className="dashboard-form ml-4">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" value="dev47" />
            </div>
            <div className="dashboard-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value="dev47@gmail.com"
              />
            </div>
            <div className="dashboard-form">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                value="Dev"
              />
            </div>
            <div className="dashboard-form">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" name="last-name" id="last-name" value="47" />
            </div>
          </section>
        </div>
        <section className="pt-6">
          Do you want to create a Quiz?{" "}
          <Link to="/quiz/create">
            <span className="quiz-btn">Click here</span>
          </Link>
        </section>
        <div className="flex sm:flex-row place-items-center place-content-center w-full px-10 py-14 space-x-8">
          <div className="flex flex-col bg-white shadow-md space-y-8 p-4">
            <div>
              <span className="font-bold text-lg">Average Score : </span>
              <progress value={average} max="100"></progress> {average}%
            </div>
            <div>
              <span className="font-bold text-lg">Total Quiz taken : </span>
              {total_quiz}
            </div>
          </div>
          <div className="shadow-md bg-white w-80">
            <h3 className="capitalize p-2">
              <span className="font-bold text-lg">quiz attempted :</span>{" "}
              {quiz_completed}
            </h3>
            {quiz_list &&
              quiz_list.map((quiz) => (
                <Link
                  key={quiz.id}
                  to={`/quiz/${quiz.id}/welcome`}
                  className="m-2"
                >
                  <button className="bg-blue-700 rounded-md p-2 text-white">
                    {quiz.title}
                  </button>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </BaseLayout>
  );
}

const mapStateToProps = (state) => ({
  quiz_list: state.quiz.quiz_list,
});

export default connect(mapStateToProps, { getQuizList })(Dashboard);
