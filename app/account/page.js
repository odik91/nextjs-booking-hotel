import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

const Page = async () => {
  const session = await auth();
  console.log(session);

  const first_name = session.user.name.split(" ").at(0);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {first_name}
    </h2>
  );
};
export default Page;