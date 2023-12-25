import SiteStructure from './SiteStructure';
import { FaGithub } from "react-icons/fa";

// Home Page Component
const Home = () => {
  return (
    <>
        {/*  SiteStructure Component Table Or Card*/}
        <SiteStructure/>
        {/* Footer Section */}
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <footer className="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600 mt-auto">
          <div className="w-full bg-neutral-300 p-4 flex justify-center items-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
            <h5 className="text-neutral-800 dark:text-neutral-400 pr-2">© 2023 Copyright: TW elements</h5>
            <a href="https://github.com/MosheBens" target="_blank">
              <FaGithub className='text-2xl'/>
            </a>
          </div>
        </footer>
        </div>
    </>

  )
}
export default Home