import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const NewDoc = () => {
  return (
    <section className="bg=[#F8F9FA] pb-10 px-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between py-6">
          <h2 className="text-gray-700 text-lg">Start a New Document</h2>

          <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="h-20 w-20 border-0"
          >
            <Icon name="more_vert" size="3xl" color="gray" />
          </Button>
        </div>
        <div>
          <img
            src="https://links.papareact.com/pju"
            alt="document image"
            loading="lazy"
            className="h-52 w-40 border-2 cursor-pointer hover:border-blue-700"
          />
        </div>
        <h2 className="text-gray-700 text-lg mt-2 ml-2 font-semibold">Blank Document</h2>
      </div>
    </section>
  );
};

export default NewDoc;
