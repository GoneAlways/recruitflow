"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { Icon } from "@/components/Icon";

export default function EditProfilePage() {
  const router = useRouter();
  const [name, setName] = useState("张伟");
  const [gender, setGender] = useState("male");
  const [birthday, setBirthday] = useState("1995-06-15");
  const [workDate, setWorkDate] = useState("2018-07-01");
  const [city, setCity] = useState("上海市");

  useEffect(() => {
    api.user.profile().then((res) => {
      if (res.code === 200) {
        const u = res.data;
        if (u.name) setName(u.name);
        if (u.gender) setGender(u.gender);
        if (u.birthday) setBirthday(u.birthday);
        if (u.work_start_date) setWorkDate(u.work_start_date);
        if (u.city) setCity(u.city);
      }
    });
  }, []);

  const handleSave = async () => {
    await api.user.updateProfile({ name, gender, birthday, work_start_date: workDate, city });
    router.back();
  };

  return (
    <div className="min-h-screen bg-background-surface text-on-surface antialiased flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-margin-mobile h-14 bg-surface-container-lowest sticky top-0 z-50 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 flex items-center justify-start text-on-surface hover:text-primary transition-colors"
        >
          <Icon name="arrow_back_ios" />
        </button>
        <h1 className="text-[18px] font-semibold text-on-surface">编辑个人信息</h1>
        <div className="w-10" />
      </header>

      <main className="flex-1 w-full max-w-[600px] mx-auto overflow-y-auto px-margin-mobile pb-32">
        {/* Avatar */}
        <section className="flex flex-col items-center justify-center py-8">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-surface-container-lowest shadow-md bg-surface-container flex items-center justify-center">
              <Icon name="person" className="text-4xl text-on-surface-variant" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-surface-container-lowest shadow-sm transform transition-transform group-hover:scale-110">
              <Icon name="photo_camera" className="text-on-primary text-[16px]" />
            </div>
          </div>
          <p className="mt-3 text-label-md text-on-surface-variant">点击更换头像</p>
        </section>

        {/* Form */}
        <section className="bg-surface-container-lowest rounded-xl p-gutter-md shadow-card border border-border-subtle flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md text-on-surface" htmlFor="name">
              姓名 <span className="text-error">*</span>
            </label>
            <input
              id="name"
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-surface-bright text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              placeholder="请输入真实姓名"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md text-on-surface">性别</label>
            <div className="flex p-1 bg-surface-container rounded-xl w-full">
              {[
                { value: "male", label: "男" },
                { value: "female", label: "女" },
              ].map((g) => (
                <button
                  key={g.value}
                  onClick={() => setGender(g.value)}
                  className={`flex-1 h-10 flex items-center justify-center rounded-lg text-label-md transition-all duration-200 ${
                    gender === g.value
                      ? "bg-surface-container-lowest shadow-sm text-primary"
                      : "text-on-surface-variant hover:bg-surface-container-low"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Birthday */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md text-on-surface" htmlFor="birthday">
              出生年月
            </label>
            <div className="relative">
              <input
                id="birthday"
                type="date"
                className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-surface-bright text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 appearance-none"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <Icon name="calendar_month" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
            </div>
          </div>

          {/* Work Start Date */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md text-on-surface" htmlFor="workDate">
              参加工作时间
            </label>
            <div className="relative">
              <input
                id="workDate"
                type="date"
                className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-surface-bright text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 appearance-none"
                value={workDate}
                onChange={(e) => setWorkDate(e.target.value)}
              />
              <Icon name="work_history" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
            </div>
          </div>

          {/* City */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md text-on-surface" htmlFor="city">
              所在城市
            </label>
            <div className="relative">
              <input
                id="city"
                className="w-full h-12 px-4 pr-10 rounded-xl border border-border-subtle bg-surface-bright text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                placeholder="请选择或输入城市"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Icon name="location_on" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
            </div>
          </div>
        </section>
      </main>

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-border-subtle px-margin-mobile py-3 pb-safe z-50 shadow-bottom">
        <div className="max-w-[600px] mx-auto w-full">
          <button
            onClick={handleSave}
            className="w-full h-12 bg-primary text-on-primary text-[16px] rounded-xl flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
}
