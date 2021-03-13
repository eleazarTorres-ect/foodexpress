const FooterComponent = ({ columnTitle, data }) => {
  return (
    <div className="w-1/2 p-5 sm:w-4/12 md:w-3/12">
      <div className="mb-6 text-xs font-medium text-gray-900 uppercase">
        {columnTitle}
      </div>
      <div className="text-md public_light">
        <ul id="skillList">
          {data.map((listitem) => (
            <li className="block my-3 text-sm font-medium text-gray-700 duration-700 hover:text-gray-600">
              {listitem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FooterComponent;
