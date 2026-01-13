import React, { useEffect, useState } from "react";
import type {
  AppContextType,
  AppReadContextType,
  Avatar,
} from "../../types/app-context.type";
import { cn } from "../../utilities/cn";

export function UserControl({
  avatar,
  name: initialName,
  setAvatar,
  setName: initialSetName,
}: {
  name: AppReadContextType["user"]["name"];
  avatar: AppReadContextType["user"]["avatar"];
  setName: AppContextType["setName"];
  setAvatar: AppContextType["setAvatar"];
}) {
  const [name, setName] = useState<string>(initialName);

  useEffect(() => {
    initialSetName(name);
  }, [initialSetName, name]);

  return (
    <section className="flex flex-col items-start justify-start gap-4 bg-black/50 rounded-2xl p-4 border">
      <div className="w-full">
        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-neutral-300 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>
      <div className="flex gap-2 bg-black p-2 rounded-sm border overflow-x-auto max-w-full">
        <IconButton avatar="fa-user" selected={avatar} setAvatar={setAvatar} />
        <IconButton avatar="fa-house" selected={avatar} setAvatar={setAvatar} />
        <IconButton
          avatar="fa-alarm-clock"
          selected={avatar}
          setAvatar={setAvatar}
        />
        <IconButton avatar="fa-truck" selected={avatar} setAvatar={setAvatar} />
        <IconButton
          avatar="fa-calendar"
          selected={avatar}
          setAvatar={setAvatar}
        />
        <IconButton avatar="fa-hand" selected={avatar} setAvatar={setAvatar} />
        <IconButton
          avatar="fa-trophy"
          selected={avatar}
          setAvatar={setAvatar}
        />
        <IconButton
          avatar="fa-suitcase"
          selected={avatar}
          setAvatar={setAvatar}
        />
        <IconButton
          avatar="fa-web-awesome"
          selected={avatar}
          setAvatar={setAvatar}
        />
        <IconButton avatar="fa-bolt" selected={avatar} setAvatar={setAvatar} />
      </div>
    </section>
  );
}

const IconButton = React.memo(LocalIconButton);

function LocalIconButton({
  avatar,
  selected,
  setAvatar,
}: {
  avatar: Avatar;
  selected: Avatar;
  setAvatar: (avatar: Avatar) => void;
}) {
  return (
    <button
      className={cn(
        "bg-black/80 p-2 rounded-xl border",
        "hover:opacity-80 cursor-pointer",
        avatar === selected && "bg-white/20"
      )}
      onClick={() => setAvatar(avatar)}
    >
      <i className={cn(avatar, "fa-solid fa-lg")} />
    </button>
  );
}
