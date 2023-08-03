'use client'
export default function LoginComponent() {
  return (
    <div className="flex flex-col p-5">
      <label className="pt-3">Email</label>
      <input type="text" className="p-2 rounded" />
      <label className="pt-3">Password</label>
      <input type="password" className="p-2 rounded" />
      <button className="bg-black my-3 rounded text-white p-2">Login</button>
    </div>
  );
}
