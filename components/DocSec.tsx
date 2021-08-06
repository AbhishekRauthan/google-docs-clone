import Icon from "@material-tailwind/react/Icon";

const DocSec = () => {
  return (
    <section className="bg-white px-10 md:px-0">
      <div className="max-w-3xl mx-auto py-8">
        <div className="flex items-center justify-between pb-5">
          <h2>My Documents</h2>
          <p>Date created</p>
          <Icon name="folder" size="3xl" color="gray" />
        </div>
      </div>
    </section>
  );
};

export default DocSec;
