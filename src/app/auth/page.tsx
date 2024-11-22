import Link from 'next/link'

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Đăng nhập
          </h1>
          
          <div className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-secondary border-primary/10 text-gray-300"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="password" 
                  className="mt-1 block w-full rounded-md bg-secondary border-primary/10 text-gray-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-secondary py-2 px-4 rounded-md hover:bg-primary-light transition-colors"
              >
                Đăng nhập
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/auth/register" className="text-primary hover:text-primary-light">
                Chưa có tài khoản? Đăng ký ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
