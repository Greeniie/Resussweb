import { combineReducers } from "@reduxjs/toolkit";
import auth from "../authSlice";
import app from "../appSlice";
import clients from "../clientSlice";
import transactions from "../transactionSlice";
import profile from "../profileSlice";
import articles from "../articleSlice";
import payments from "../paymentSlice";
import contacts from "../supportSlice";
import reports from "../reportSlice";
import jobs from "../jobSlice";
import featuredJobs from "../featuredJobSlice";
import admin from "../adminSlice";
import role from "../RoleSlice";
import plan from "../planSlice";
import subscriptions from "../subscriptionSlice";
import reviews from "../reviewSlice";
import jobtags from "../jobTagSlice";
import referrals from "../referralSlice";

const rootReducer = combineReducers({
  auth,
  app,
  clients,
  transactions,
  profile,
  articles,
  payments,
  contacts,
  reports,
  jobs,
  featuredJobs,
  admin,
  role,
  plan,
  subscriptions,
  reviews,
  jobtags,
  referrals,
});

export default rootReducer;
