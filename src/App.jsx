import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import AdmissionProcessPage from "./pages/Main/Admissonpage/AdmissionProcessPage";

const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const HomePage = lazy(() => import("./pages/Main/Homepage/Homepage"));
const Aboutpage = lazy(() => import("./pages/Main/AboutPage/AboutPage"));
const TrustBodyPage = lazy(() =>
  import("./pages/Main/TrustBodypage/TrushBodypage")
);
const AcademicsPage = lazy(() =>
  import("./pages/Main/Academicspage/Academicspage")
);
const EventsPage = lazy(() => import("./pages/Main/Eventspage/Eventspage"));
const CareerPage = lazy(() => import("./pages/Main/Careerpage/Careerpage"));
const AlumniPage = lazy(() => import("./pages/Main/Alumnipage/Alumnipage"));
const AdmissionPage = lazy(() =>
  import("./pages/Main/Admissonpage/Admissionpage")
);
const ContactPage = lazy(() => import("./pages/Main/Contactpage/Contactpage"));
const LoginPage = lazy(() => import("./pages/Auth/Login/LoginPage"));
const RegisterPage = lazy(() =>
  import("./pages/Auth/RegisterPage/RegisterPage")
);
const NotFoundPage = lazy(() => import("./layouts/_default/NotFoundPage"));

function App() {
  console.log("App is running in", import.meta.env.VITE_NODE_ENV);

  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<Aboutpage />} />
          <Route path="/trust-body" element={<TrustBodyPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/admission/process" element={<AdmissionProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
