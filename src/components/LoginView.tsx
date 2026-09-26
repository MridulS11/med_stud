import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight, User, School, CheckCircle2, UserPlus, LogIn } from 'lucide-react';

interface LoginViewProps {
  onLoginSuccess: (email: string, userName?: string) => void;
}

interface RegisteredUser {
  name: string;
  email: string;
  password?: string;
  college?: string;
  createdAt: string;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const [tab, setTab] = useState<'signin' | 'register'>('signin');

  // Sign in state
  const [email, setEmail] = useState('student@marrow.med');
  const [password, setPassword] = useState('pathology2026');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Register state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regCollege, setRegCollege] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Feedback messages
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const getRegisteredUsers = (): Record<string, RegisteredUser> => {
    try {
      const data = localStorage.getItem('marrow_registered_users');
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }

    const users = getRegisteredUsers();
    const registeredUser = users[cleanEmail];

    if (registeredUser) {
      if (registeredUser.password && registeredUser.password !== password) {
        setError('Incorrect password for this registered account.');
        return;
      }
      if (rememberMe) {
        localStorage.setItem('marrow_auth_user', cleanEmail);
        localStorage.setItem('marrow_auth_name', registeredUser.name);
      }
      onLoginSuccess(cleanEmail, registeredUser.name);
      return;
    }

    // Default demo login check
    if (cleanEmail === 'student@marrow.med' || cleanEmail.includes('@')) {
      if (rememberMe) {
        localStorage.setItem('marrow_auth_user', cleanEmail);
        localStorage.setItem('marrow_auth_name', 'Student');
      }
      onLoginSuccess(cleanEmail, 'Student');
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!regName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    const cleanEmail = regEmail.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Please enter a valid academic or personal email address.');
      return;
    }
    if (!regPassword || regPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setError('Passwords do not match. Please re-enter.');
      return;
    }
    if (!agreeTerms) {
      setError('Please accept the academic honor agreement.');
      return;
    }

    const users = getRegisteredUsers();
    if (users[cleanEmail]) {
      setError('An account with this email address already exists. Please sign in instead.');
      return;
    }

    // Save newly registered user
    const newUser: RegisteredUser = {
      name: regName.trim(),
      email: cleanEmail,
      password: regPassword,
      college: regCollege.trim() || 'Nursing Institute',
      createdAt: new Date().toISOString(),
    };

    users[cleanEmail] = newUser;
    localStorage.setItem('marrow_registered_users', JSON.stringify(users));
    localStorage.setItem('marrow_auth_user', cleanEmail);
    localStorage.setItem('marrow_auth_name', newUser.name);

    setSuccessMsg('Registration successful! Redirecting to syllabus...');
    setTimeout(() => {
      onLoginSuccess(cleanEmail, newUser.name);
    }, 600);
  };

  const handleQuickDemo = () => {
    setEmail('student@marrow.med');
    setPassword('pathology2026');
    localStorage.setItem('marrow_auth_user', 'student@marrow.med');
    localStorage.setItem('marrow_auth_name', 'Student Doctor');
    onLoginSuccess('student@marrow.med', 'Student Doctor');
  };

  return (
    <div className="min-h-screen bg-[#E8ECE7] flex flex-col justify-center items-center p-4 sm:p-6 selection:bg-amber-200">
      <div className="w-full max-w-md">
        {/* Brand Card */}
        <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-stone-200/80 transition-all">
          {/* Logo Avatar */}
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-3xl bg-teal-800 flex items-center justify-center text-amber-400 font-serif font-bold text-3xl shadow-md border-4 border-[#E8ECE7]">
              M
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="font-serif text-3xl font-semibold text-stone-900 tracking-tight">
              {tab === 'signin' ? 'Welcome back' : 'Create Account'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 font-sans mt-1">
              {tab === 'signin'
                ? 'Sign in to your Marrow Semester IV portal'
                : 'Register for Semester IV Pathology & Genetics'}
            </p>
          </div>

          {/* Segmented Tab Switcher */}
          <div className="bg-stone-100 p-1 rounded-2xl flex items-center mb-6">
            <button
              type="button"
              onClick={() => {
                setTab('signin');
                setError('');
                setSuccessMsg('');
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                tab === 'signin'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <LogIn className="w-3.5 h-3.5 text-teal-800" />
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setTab('register');
                setError('');
                setSuccessMsg('');
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                tab === 'register'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5 text-amber-600" />
              New Registration
            </button>
          </div>

          {/* Feedback messages */}
          {error && (
            <div className="p-3 mb-4 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
              {error}
            </div>
          )}
          {successMsg && (
            <div className="p-3 mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {successMsg}
            </div>
          )}

          {/* TAB 1: SIGN IN FORM */}
          {tab === 'signin' && (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="doctor@marrow.med"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className="w-full pl-10 pr-10 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition-all font-sans"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-stone-300 text-teal-800 focus:ring-teal-800/30"
                  />
                  <span className="text-xs text-stone-600 font-sans">Remember me</span>
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Demo credentials: student@marrow.med / pathology2026, or use any newly registered account.');
                  }}
                  className="text-xs text-teal-800 hover:text-teal-900 font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-teal-800 hover:bg-teal-900 active:scale-[0.99] text-white font-medium py-3 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-sm mt-2"
              >
                Sign in to Portal
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* TAB 2: REGISTER FORM */}
          {tab === 'register' && (
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1 uppercase tracking-wider">
                  Academic / Personal Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="priya@college.ac.in"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1 uppercase tracking-wider">
                  Nursing College / Institute <span className="text-stone-400 lowercase font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <School className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={regCollege}
                    onChange={(e) => setRegCollege(e.target.value)}
                    placeholder="e.g. AIIMS College of Nursing"
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type={showRegPassword ? 'text' : 'password'}
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      placeholder="Min 6 chars"
                      required
                      className="w-full pl-8 pr-8 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition-all font-sans"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegPassword(!showRegPassword)}
                      className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-stone-400 hover:text-stone-600 transition-colors"
                    >
                      {showRegPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 uppercase tracking-wider">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type={showRegPassword ? 'text' : 'password'}
                      value={regConfirmPassword}
                      onChange={(e) => setRegConfirmPassword(e.target.value)}
                      placeholder="Repeat password"
                      required
                      className="w-full pl-8 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition-all font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Terms checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-stone-300 text-teal-800 focus:ring-teal-800/30"
                  />
                  <span className="text-xs text-stone-600 font-sans leading-tight">
                    I agree to the academic honor code for B.Sc. Nursing Semester IV preparation.
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-teal-800 hover:bg-teal-900 active:scale-[0.99] text-white font-medium py-3 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-sm mt-2"
              >
                Create Account & Enter Portal
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Quick Demo Access (available on both tabs) */}
          <div className="mt-5 pt-5 border-t border-stone-100">
            <button
              type="button"
              onClick={handleQuickDemo}
              className="w-full py-2.5 px-4 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 text-amber-900 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              1-Click Instant Demo Login
            </button>
            <p className="text-[11px] text-stone-400 text-center mt-2 font-sans">
              Instant access without password • Preloaded INC Semester IV curriculum
            </p>
          </div>
        </div>

        {/* Footer info & switcher */}
        <div className="text-center mt-6 text-xs text-stone-600 font-sans">
          {tab === 'signin' ? (
            <p>
              Don't have an account?{' '}
              <button
                onClick={() => {
                  setTab('register');
                  setError('');
                }}
                className="text-teal-800 font-semibold hover:underline"
              >
                Register now
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button
                onClick={() => {
                  setTab('signin');
                  setError('');
                }}
                className="text-teal-800 font-semibold hover:underline"
              >
                Sign in to your account
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
