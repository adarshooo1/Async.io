import ProfileForm from "@/components/forms/profile-form";
import React from "react";
import ProfilePicture from "./_components/profile-picture";
import { prismaDB } from "@/lib/prismaDB";
import { currentUser } from "@clerk/nextjs";

type Props = {};

const Settings = async (props: Props) => {
  const authUser = await currentUser();
  if (!authUser) return null;

  const removeProfileImage = async () => {
    "use server";
    const response = await prismaDB.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: "",
      },
    });
    return response;
  };

  const uploadProfileImage = async (image: string) => {
    "use server";
    const id = authUser.id;
    const response = await prismaDB.user.update({
      where: {
        clerkId: id,
      },
      data: {
        profileImage: image,
      },
    });
    return response;
  };

  const updateUserInfo = async (name: string) => {
    "use server";

    const updateUser = await prismaDB.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        name,
      },
    });
    return updateUser;
  };

  const user = await prismaDB.user.findUnique({
    where: {
      clerkId: authUser.id,
    },
  });

  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="md:text-4xl text-2xl top-0 z-20 p-6 bg-background/50 backdrop-blur-lg flex items-center border-b font-semibold">
        Settings
      </h1>
      <div className="p-6 overflow-y-scroll h-full pb-32">
        {/* Further Content */}
        <h2 className="text-2xl font-bold">User Profiles</h2>
        <p className="text-base dark:text-white/50">
          Add or update your information
        </p>
        <div>
          <ProfilePicture
            onDelete={removeProfileImage}
            onUpload={uploadProfileImage}
            userImage={user?.profileImage || ""}
          ></ProfilePicture>
        </div>

        <ProfileForm user={user} onUpdate={updateUserInfo} />
      </div>
    </div>
  );
};

export default Settings;
