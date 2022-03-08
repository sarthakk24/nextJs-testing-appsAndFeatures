const NewUser = ({ name, age }: { name: string; age: number }) => {
  return (
    <div className="bg-white text-black p-5 mt-7 rounded-lg">
      <div className="border-[#ECEDED] border-2 p-2 font-semibold">{`${name}(${age} years old)`}</div>
    </div>
  );
};

export default NewUser;
