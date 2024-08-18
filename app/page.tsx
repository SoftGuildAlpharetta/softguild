import "./Home.css";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-8">
        <div className="grid xl:grid-cols-2">
          <div>
            
            <p className="text-l">
              SoftGuild is a place for professionals to share their profession,
              and for individuals to learn what it takes to succeed in that
              profession. Our aim is to raise awareness of what it takes to
              succeed in a given profession, and connect people to resources
              that will help them achieve that success.
            </p>
          </div>
          <div className="bg-[url(/stock/code_mentor_w_student.jpg)]" />
        </div>
      </main>
    </>
  );
}
