
import { useState } from "react";
import "./App.css";

function App() {
  const [attempts, setAttempts] = useState(0);
  const [position, setPosition] = useState({
    left: 50,
    top: 75,
  });

  const [page, setPage] = useState(1);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [diagnosed, setDiagnosed] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);

  const moveButton = () => {
    setAttempts((prev) => prev + 1);

    setPosition({
      left: Math.random() * 65 + 15,
      top: Math.random() * 55 + 20,
    });
  };

  const checkAnswer = (choice) => {
    setAnswer(choice);
    setChecked(true);
  };

  return (
    <main className="page">

      <div className="floating-heart heart-one">♡</div>
      <div className="floating-heart heart-two">♡</div>
      <div className="floating-heart heart-three">✦</div>

      <section className="main-card">

        <div className="top-label">
          <span className="status-dot"></span>
          A LITTLE SURPRISE FOR YOU
        </div>

        {page === 1 ? (
          <>
            <div className="computer-icon">
              <div className="screen">
                <span>♡</span>
              </div>
              <div className="computer-base"></div>
            </div>

            <p className="small-text">Hey, teacher! 👋</p>

            <h1>
              Wala kanang <span>joke?</span>
            </h1>

            <h2>Kasi meron ako...</h2>

            <p className="description">
              Don't worry, this isn't a technical issue.
              I just made something for you. hehe.
            </p>

            <div className="button-area">

              <button
                className="curious-button"
                onClick={() => setPage(2)}
              >
                I'm curious! <span>♡</span>
              </button>

              <button
                className="give-up-button"
                style={{
                  left: `${position.left}%`,
                  top: `${position.top}%`,
                }}
                onMouseEnter={moveButton}
                onTouchStart={(e) => {
                  e.preventDefault();
                  moveButton();
                }}
                onClick={moveButton}
              >
                Give Up 🏃
              </button>

            </div>

            <p className="attempt-message">
              {attempts === 0
                ? "Psst... try clicking Give Up 😂"
                : attempts < 3
                ? "HAHAHA! You can't escape that easily! 😂"
                : "Grabe, determined ka talaga mag-give up? 😭"}
            </p>
          </>
        ) : page === 2 ?  (
          <div className="quiz-section">

            <div className="quiz-icon">📚</div>

            <p className="small-text">
              PAGE 02 · ESL DEPARTMENT
            </p>

            <h1>
              Hello, <span>Teacher!</span>
            </h1>

            <p className="description quiz-description">
              Since you're an English teacher,
              can you help me with a little grammar question?
            </p>

            <div className="question-card">
              <span className="question-label">
                GRAMMAR CHALLENGE
              </span>

              <h3>
                Which sentence is grammatically correct?
              </h3>

              <div className="answer-list">

                <button
                  className={`answer-button ${answer === "A" ? "selected" : ""}`}
                  onClick={() => checkAnswer("A")}
                  disabled={checked}
                >
                  <span>A</span> I has a crush on you.
                </button>

                <button
                  className={`answer-button ${answer === "B" ? "selected" : ""}`}
                  onClick={() => checkAnswer("B")}
                  disabled={checked}
                >
                  <span>B</span> I have a crush on you.
                </button>

                <button
                  className={`answer-button ${answer === "C" ? "selected" : ""}`}
                  onClick={() => checkAnswer("C")}
                  disabled={checked}
                >
                  <span>C</span> I having a crush on you.
                </button>

              </div>
            </div>

            {checked && (
              <div className="quiz-result">
                {answer === "B" ? (
                  <>
                    <h3>Correct answer! 🎉</h3>
                    <p>
                      Wow, teacher! Excellent grammar!
                      Looks like you know your English...
                      and maybe you know who this sentence is about. 😂
                    </p>
                  </>
                ) : (
                  <>
                    <h3>Oops! Not quite! 😅</h3>
                    <p>
                      Try again, teacher!
                      I believe in your English skills. 😂
                    </p>
                    <button
                      className="retry-button"
                      onClick={() => {
                        setAnswer("");
                        setChecked(false);
                      }}
                    >
                      Try Again
                    </button>
                  </>
                )}
              </div>
            )}

            {answer === "B" && (
              <button
  className="curious-button next-button"
  onClick={() => setPage(3)}
>
  Enter IT Department →
</button>
            )}

          
          </div>
        ) : page === 3 ?(
          <div className="quiz-section">

            <div className="quiz-icon">💻</div>

            <p className="small-text">
              PAGE 03 · IT DEPARTMENT
            </p>

            <h1>
              Welcome to <span>IT Support!</span>
            </h1>

            <p className="description quiz-description">
              Teacher, I need to run a quick system
              diagnosis. Something seems a little unusual.
            </p>

            <div className="diagnostic-card">

              <div className="diagnostic-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">
                  SYSTEM_DIAGNOSTICS.exe
                </span>
              </div>

              <div className="diagnostic-body">

                <p className="terminal-intro">
                  INITIALIZING SYSTEM CHECK...
                </p>

                <div className="diagnostic-row">
                  <span>Hardware</span>
                  <span className="status-ok">NORMAL ✓</span>
                </div>

                <div className="diagnostic-row">
                  <span>Network</span>
                  <span className="status-ok">CONNECTED ✓</span>
                </div>

                <div className="diagnostic-row">
                  <span>Software</span>
                  <span className="status-ok">UPDATED ✓</span>
                </div>

                <div className="diagnostic-row">
                  <span>Heart Status</span>
                  <span className="status-error">
                    UNSTABLE ♡
                  </span>
                </div>

                {diagnosed && (
                  <div className="diagnosis-result">
                    <p>DIAGNOSIS COMPLETE! ❤️</p>
                    <p>
                      No hardware problem detected.
                      Apparently, someone has been
                      taking up too much space in
                      my thoughts.
                    </p>
                    <p className="solution">
                      Recommended solution:
                      Talk to that person more often. 😂
                    </p>
                  </div>
                )}

              </div>
            </div>

            {!diagnosed ? (
              <button
                className="curious-button run-button"
                onClick={() => setDiagnosed(true)}
              >
                Run Diagnosis 🔍
              </button>
            ) : (
              <button
  className="curious-button next-button"
  onClick={() => setPage(4)}
>
  Open your final surprise 💌
</button>
            )}

          
          </div>
        ) : (
          <div className="letter-section">

            <div className="letter-icon">💌</div>

            <p className="small-text">
              PAGE 04 · A PERSONAL MESSAGE
            </p>

            <h1>
              Just one <span>last thing...</span>
            </h1>

            <p className="description letter-intro">
              Before you go, there's something
              I'd like you to read.
            </p>

            {!letterOpen ? (

              <div className="envelope-container">

                <div className="envelope">
                  <div className="envelope-heart">♡</div>
                  <span>For you, Teacher</span>
                </div>

                <p className="envelope-caption">
                  A little message, made just for you.
                </p>

                <button
                  className="curious-button open-letter-button"
                  onClick={() => setLetterOpen(true)}
                >
                  Open my message 💗
                </button>

              </div>

            ) : (

              <div className="letter-paper">

                <p className="letter-date">
                  A LITTLE NOTE FOR YOU
                </p>

                <h2>Dear Teacher,</h2>

                <p>
                  I may be the IT guy who fixes
                  computers, networks, and technical
                  problems...
                </p>

                <p>
                  But there's one thing I haven't
                  figured out yet.
                </p>

                <p className="letter-highlight">
                  How can someone make an ordinary
                  day feel a little more special
                  just by being around?
                </p>

                <p>
                  I don't know if you'll ever notice,
                  but I think you're one of the
                  reasons some days at work feel
                  a little brighter.
                </p>

                <p>
                  Anyway, keep smiling, Teacher.
                  You make the workplace a little
                  more interesting just like ur bangs HAHAHA. 😊
                </p>

                <div className="letter-signature">
                  <span>From your friendly</span>
                  <strong>IT Support Guy 💻♡</strong>
                </div>

              </div>

            )}

            <p className="letter-footer">
              No technical issue. Just a genuine little message. ♡
            </p>

          </div>
        )}



        <div className="card-footer">
          Made with ♡ by your friendly IT Support
        </div>

      </section>

      <p className="bottom-note">
        No viruses here. Just a little surprise. 😂
      </p>

    </main>
  );
}

export default App;
