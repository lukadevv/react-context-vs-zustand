import type { AppReadContextType, Avatar } from "../../types/app-context.type";
import { cn } from "../../utilities/cn";
import { SettingsButton } from "./SettingsButton";

export function UserButton({
  name,
  avatar,
  setAvatar,
  setName,
}: {
  name: AppReadContextType["user"]["name"];
  avatar: AppReadContextType["user"]["avatar"];
  setName: (name: AppReadContextType["user"]["name"]) => void;
  setAvatar: (name: AppReadContextType["user"]["avatar"]) => void;
}) {
  return (
    <SettingsButton title="User Settings" icon="fa-user">
      <section className="flex flex-col items-start justify-start gap-4 bg-black/50 rounded-2xl p-4 border">
        <div>
          <input
            placeholder={"Your name"}
            value={name}
            onChange={() => setName(name)}
          />
        </div>
        <div className="flex gap-2 bg-black p-2 rounded-sm border overflow-x-auto">
          <IconButton
            avatar="fa-user"
            selected={avatar}
            setAvatar={setAvatar}
          />
          <IconButton
            avatar="fa-house"
            selected={avatar}
            setAvatar={setAvatar}
          />
          <IconButton
            avatar="fa-alarm-clock"
            selected={avatar}
            setAvatar={setAvatar}
          />
          <IconButton
            avatar="fa-truck"
            selected={avatar}
            setAvatar={setAvatar}
          />
          <IconButton
            avatar="fa-calendar"
            selected={avatar}
            setAvatar={setAvatar}
          />
          <IconButton
            avatar="fa-hand"
            selected={avatar}
            setAvatar={setAvatar}
          />
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
          <IconButton
            avatar="fa-bolt"
            selected={avatar}
            setAvatar={setAvatar}
          />
        </div>
      </section>
    </SettingsButton>
  );
}

function IconButton({
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
