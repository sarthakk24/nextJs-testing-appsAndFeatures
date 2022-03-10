const NewUser = ({ name, age }: { name: string; age: number }) => {
  return (
    <div className="border-[#ECEDED] border-2 p-2 font-semibold">{`${name}(${age} years old)`}</div>
  );
};

export default NewUser;
