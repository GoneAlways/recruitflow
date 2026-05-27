"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { Icon } from "@/components/Icon";

export default function LoginPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!privacyChecked) {
      setError("请先勾选并同意用户协议和隐私政策以继续。");
      return;
    }

    if (!phone || !password || (isRegister && !name)) {
      setError("请填写所有必填字段");
      return;
    }

    const res = isRegister
      ? await api.auth.register({ name, phone, password })
      : await api.auth.login({ phone, password });

    if (res.code === 200 && res.data) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setToast(true);
      setTimeout(() => {
        setToast(false);
        router.push("/");
      }, 1500);
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-margin-mobile relative">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary-container rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-secondary-container rounded-full blur-[120px]" />
      </div>

      <main className="w-full max-w-[420px] z-10">
        {/* Logo */}
        <section className="flex flex-col items-center mb-10 space-y-stack-gap">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 duration-300">
            <Icon name="rocket_launch" className="text-on-primary !text-[32px]" />
          </div>
          <h1 className="text-headline-lg-mobile md:md:text-headline-lg text-primary tracking-tight">
            RecruitFlow
          </h1>
          <p className="text-body-md text-on-surface-variant opacity-80">
            加速您的职业旅程
          </p>
        </section>

        {/* Login Form */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-card border border-border-subtle">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {isRegister && (
              <div className="space-y-2">
                <label className="text-label-md text-on-surface-variant ml-1" htmlFor="name">
                  姓名
                </label>
                <input
                  id="name"
                  className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-surface-container-low text-body-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="请输入姓名"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-label-md text-on-surface-variant ml-1" htmlFor="phone">
                手机号
              </label>
              <div className="flex items-center gap-2 p-1 border border-border-subtle rounded-xl bg-surface-container-low transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
                <div className="flex items-center gap-1 px-3 border-r border-border-subtle cursor-pointer py-2">
                  <span className="text-body-md text-on-surface font-semibold">+86</span>
                  <Icon name="expand_more" className="text-outline text-[18px]" />
                </div>
                <input
                  id="phone"
                  className="w-full bg-transparent border-none focus:ring-0 text-body-lg py-2 px-1 text-on-surface placeholder:text-outline"
                  placeholder="请输入手机号"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-label-md text-on-surface-variant ml-1" htmlFor="password">
                密码
              </label>
              <input
                id="password"
                className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-surface-container-low text-body-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="请输入密码"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-error text-body-md text-center">{error}</p>}

            <button
              className="w-full bg-primary text-on-primary text-label-md py-4 rounded-xl hover:bg-on-primary-fixed-variant active:scale-95 transition-all duration-200 shadow-sm"
              type="submit"
            >
              {isRegister ? "注册" : "登录"}
            </button>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-border-subtle" />
              <span className="flex-shrink mx-4 text-label-sm text-outline uppercase tracking-wider">
                或其他方式
              </span>
              <div className="flex-grow border-t border-border-subtle" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">
              <button
                className="flex items-center justify-center gap-2 border border-border-subtle py-3 rounded-xl hover:bg-surface-container-low active:scale-95 transition-all duration-200"
                type="button"
              >
                <span className="text-label-md text-on-surface-variant">微信</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 border border-border-subtle py-3 rounded-xl hover:bg-surface-container-low active:scale-95 transition-all duration-200"
                type="button"
              >
                <Icon name="mail" className="text-on-surface-variant !text-[20px]" />
                <span className="text-label-md text-on-surface-variant">邮箱</span>
              </button>
            </div>
          </form>
        </div>

        {/* Switch mode */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-primary hover:underline"
          >
            {isRegister ? "已有账号？去登录" : "没有账号？去注册"}
          </button>
        </div>

        {/* Terms & Privacy */}
        <div className="mt-4 flex items-start gap-3 px-2">
          <input
            className="w-4 h-4 mt-0.5 rounded border-border-subtle text-primary focus:ring-primary cursor-pointer"
            id="privacy"
            type="checkbox"
            checked={privacyChecked}
            onChange={(e) => setPrivacyChecked(e.target.checked)}
          />
          <label className="text-body-md text-on-surface-variant leading-tight cursor-pointer" htmlFor="privacy">
            我已阅读并同意
            <a className="text-primary font-semibold hover:underline" href="#">用户协议</a>
            和
            <a className="text-primary font-semibold hover:underline" href="#">隐私政策</a>。
          </label>
        </div>
      </main>

      {/* Success Toast */}
      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 transform transition-all duration-300 bg-inverse-surface text-inverse-on-surface px-6 py-3 rounded-full flex items-center gap-3 shadow-lg z-50 ${
          toast ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <Icon name="check_circle" className="text-success-mint" />
        <span className="text-label-md">{isRegister ? "注册成功" : "登录成功"}</span>
      </div>
    </div>
  );
}
