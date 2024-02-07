const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="max-w-lg mx-auto flex flex-col gap-5 text-center items-center mb-10">
      <h4 className="text-3xl font-medium">{heading}</h4>
      <p className="text-sm text-gray-600">{subHeading}</p>
    </div>
  );
};

export default SectionHeader;
