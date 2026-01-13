import React, { useMemo } from "react";
import { cn } from "../../utilities/cn";
import type {
  AppContextType,
  Avatar as AvatarType,
} from "../../types/app-context.type";

export function Content({
  avatarChildren,
  nameChildren,
  background,
  descriptionChildren,
}: {
  background: AppContextType["theme"]["background"];
  avatarChildren: React.ReactNode;
  nameChildren: React.ReactNode;
  descriptionChildren: React.ReactNode;
}) {
  return (
    <article
      style={{
        backgroundColor: background,
      }}
      className={"h-142 overflow-y-auto rounded-sm p-2 border"}
    >
      {nameChildren}
      {avatarChildren}
      {descriptionChildren}
    </article>
  );
}

export const Avatar = React.memo(LocalAvatar);
export const Name = React.memo(LocalName);
export const Description = React.memo(LocalDescription);

function LocalAvatar({ avatar }: { avatar: AvatarType }) {
  return (
    <div className="w-full flex items-center justify-center py-2">
      <div
        key={avatar}
        className="hover:scale-120 transition-transform cursor-not-allowed flex items-center justify-center w-12.5 h-12.5 bg-black/40 rounded-xl border"
      >
        <i className={cn("fa-solid text-2xl", avatar)} />
      </div>
    </div>
  );
}

function LocalName({ text, name }: { text: string; name: string }) {
  return (
    <p
      style={{
        color: text,
      }}
    >
      Hello <span className="text-blue-400 font-bold">{name}</span>!
    </p>
  );
}

function LocalDescription({
  fontSize,
  text,
}: {
  fontSize: AppContextType["fontSize"];
  text: AppContextType["theme"]["text"];
}) {
  const fontSizeClassName = useMemo(() => {
    switch (fontSize) {
      case 4:
        return "text-[4px]";
      case 5:
        return "text-[5px]";
      case 6:
        return "text-[6px]";
      case 7:
        return "text-[7px]";
      case 8:
        return "text-[8px]";
      case 9:
        return "text-[9px]";
      case 10:
        return "text-[10px]";
      case 11:
        return "text-[11px]";
      case 12:
        return "text-[12px]";
      case 13:
        return "text-[13px]";
      case 14:
        return "text-[14px]";
      case 15:
        return "text-[15px]";
      case 16:
        return "text-[16px]";
      case 17:
        return "text-[17px]";
      case 18:
        return "text-[18px]";
      case 19:
        return "text-[19px]";
      case 20:
        return "text-[20px]";
      case 21:
        return "text-[21px]";
      case 22:
        return "text-[22px]";
      case 23:
        return "text-[23px]";
      case 24:
        return "text-[24px]";
      case 25:
        return "text-[25px]";
      case 26:
        return "text-[26px]";
      case 27:
        return "text-[27px]";
      case 28:
        return "text-[28px]";
      case 29:
        return "text-[29px]";
      case 30:
        return "text-[30px]";
      case 31:
        return "text-[31px]";
      case 32:
        return "text-[32px]";
      case 33:
        return "text-[33px]";
      case 34:
        return "text-[34px]";
      case 35:
        return "text-[35px]";
      case 36:
        return "text-[36px]";
      case 37:
        return "text-[37px]";
      case 38:
        return "text-[38px]";
      case 39:
        return "text-[39px]";
      case 40:
        return "text-[40px]";
    }
  }, [fontSize]);

  return (
    <p
      className={cn(
        "text-sm leading-relaxed space-y-5 pt-4",
        fontSizeClassName
      )}
      style={{
        color: text,
      }}
    >
      <span className="block">
        React Context is a native React feature designed mainly for dependency
        injection and low-frequency global data. While it works well for small
        apps or static values like theme, locale, or authentication, performance
        issues arise when it is used for frequently changing state.
      </span>
      <span className="block">
        The main limitation of Context is its update propagation model: when the
        Provider value changes, all consuming components re-render, even if they
        don't rely on the changed part of the state. Although memoization and
        splitting contexts can reduce this, they increase complexity and rarely
        eliminate all unnecessary renders.
      </span>
      <span className="block">
        Zustand takes a different approach by using an external store with
        selective subscriptions. Components only re-render when the specific
        slice of state they depend on changes, which significantly improves
        performance and predictability in larger or more dynamic applications.
      </span>
      <span className="block">
        Because of this architecture, Zustand scales better for
        performance-critical use cases such as games, dashboards, and real-time
        interfaces. Context remains ideal for simple, low-frequency global data,
        while Zustand is generally the better choice for medium to large
        applications that require fine-grained control over re-rendering.
      </span>
    </p>
  );
}
