import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

// might see 'interface' instead of 'type'
// difference between type and interface
// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa0JUZWJJRmY5WlM1OVJxcktqRVphQVo3UUpQUXxBQ3Jtc0tscDRQRVZvZy1XTmFUY0VTX2s3M1Q5d2RIWWdkTGVYNGtUUGhsYUZjdUIyeGpueFMzLWI1dmxhYno3WmlmSU5GMUE0dlV6aS1XR0ZlN1lwS0hWc2Y5U1o0bnZYdzcxaVJTbkJ1VDdnbmtNTjhLd1Zvdw&q=https%3A%2F%2Ftinyurl.com%2Ftypescripttypesvsinterfaces&v=I2NNxr3WPDo
type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage, }: Props) => {
  // The links are capitalized. Need them lowercase for code since they'll be
  // used for id's later on. Any spaces are removed with regex
  // TS doesn't know you converted this
  // You have to tell it using the 'as' keyword
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      // change the color of the selected page
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
