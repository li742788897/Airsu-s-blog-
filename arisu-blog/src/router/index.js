// import { Toast } from 'vant';
import { createRouter, createWebHashHistory } from 'vue-router';
// import LeaveOvertimeEntrance from '../views/leaveOvertime/apply/LeaveOvertimeEntranceCheck.vue';
//校验是否存在emppk和openid
function checkStorage(key) {
  const data = sessionStorage.getItem(key);
  if (data && data !== 'null' && data !== 'undefined') {
    return true;
  } else {
    return false;
  }
}
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue'),
  },
//   {
//     path: '/leaveOvertimeEntrance',
//     name: 'LeaveOvertimeEntrance',
//     component: LeaveOvertimeEntrance,
//   },
//   {
//     path: '/realLeaveApply',
//     name: 'RealLeaveApply',
//     component: () => import('../views/leaveOvertime/apply/LeaveOvertimeEntrance.vue'),
//     // meta: { check: true },
//   },
//   {
//     path: '/leaveApply',
//     name: 'LeaveApply',
//     component: () => import('../views/leaveOvertime/apply/LeaveApply2.vue'),
//     // meta: { check: true },
//   },
//   {
//     path: '/ovetimeApply',
//     name: 'OvetimeApply',
//     component: () => import('../views/leaveOvertime/apply/OvetimeApply.vue'),
//     // meta: { check: true },
//   },
//   {
//     path: '/applyList',
//     name: 'ApplyList',
//     component: () => import('../views/leaveOvertime/apply/ApplyList.vue'),
//     // meta: { check: true },
//   },
//   {
//     path: '/covid19ApplyList',
//     name: 'Covid19ApplyList',
//     component: () => import('../views/leaveOvertime/apply/ApplyCovid19List.vue'),
//     // meta: { check: true },
//   },
//   {
//     path: '/uploadSickLeaveMaterial/:id',
//     name: 'UploadSickLeaveMaterial',
//     component: () => import('../views/leaveOvertime/apply/UploadSickLeaveMaterial.vue'),
//   },
//   {
//     path: '/sickLeaveList',
//     name: 'SickLeaveList',
//     component: () => import('../views/leaveOvertime/apply/SickLeaveList.vue'),
//     // meta: { check: true },
//   },
//   {
//     path: '/covid19Leave',
//     name: 'Covid19Leave',
//     component: () => import('../views/leaveOvertime/apply/Covid19Leave.vue'),
//     // meta: { check: true },
//   },
//   {
//     path: '/cancelCovidApply',
//     name: 'CancelCovidApply',
//     component: () => import('../views/leaveOvertime/apply/CancelCovid19Apply.vue'),
//     // meta: { check: true },
//   },
//   //审核相关  入口路径
//   {
//     path: '/auditEntrance/:checkEmppk',
//     name: 'auditEntranceCheck',
//     component: () => import('../views/leaveOvertime/audit/AuditEntranceCheck.vue'),
//   },
//   {
//     path: '/realAuditEntrance',
//     name: 'realAuditEntrance',
//     component: () => import('../views/leaveOvertime/audit/AuditEntrance.vue'),
//   },
//   //加班审核
//   {
//     path: '/auditList/:id',
//     name: 'auditList',
//     component: () => import('../views/leaveOvertime/audit/AuditList.vue'),
//   },
//   {
//     path: '/OvertimeToBeReviewedDetails/:id',
//     name: 'OvertimeToBeReviewedDetails',
//     component: () => import('../views/leaveOvertime/audit/auditState/OvertimeToBeReviewedDetails.vue'),
//   },
//   {
//     path: '/ReviewedDetails/:id',
//     name: 'ReviewedDetails',
//     component: () => import('../views/leaveOvertime/audit/auditState/ReviewedDetails.vue'),
//   },
//   {
//     path: '/OverdueUnapprovedDetails/:id',
//     name: 'OverdueUnapprovedDetails',
//     component: () => import('../views/leaveOvertime/audit/auditState/OverdueUnapprovedDetails.vue'),
//   },
//   //请假审核
//   {
//     path: '/leaveApprovalList/:id',
//     name: 'LeaveApprovalList',
//     component: () => import('../views/leaveOvertime/audit/auditState/leaveApproval/LeaveApprovalList.vue'),
//   },
//   {
//     path: '/leavePendingApprovalDetails/:id',
//     name: 'LeavePendingApprovalDetails',
//     component: () => import('../views/leaveOvertime/audit/auditState/leaveApproval/LeavePendingApprovalDetails.vue'),
//   },
//   {
//     path: '/covid19PendingApprovalDetails/:id',
//     name: 'Covid19PendingApprovalDetails',
//     component: () =>
//       import('../views/leaveOvertime/audit/auditState/covid19LeaveApproval/Covid19PendingApprovalDetails.vue'),
//   },
//   {
//     path: '/invalidCovid19PendingApprovalDetails/:id',
//     name: 'InvalidCovid19PendingApprovalDetails',
//     component: () =>
//       import('../views/leaveOvertime/audit/auditState/covid19LeaveApproval/InvalidCovid19PendingApprovalDetails.vue'),
//   },

//   {
//     path: '/leaveApprovedDetails/:id',
//     name: 'LeaveApprovedDetails',
//     component: () => import('../views/leaveOvertime/audit/auditState/leaveApproval/LeaveApprovedDetails.vue'),
//   },
//   {
//     path: '/leaveOverdueDetails/:id',
//     name: 'LeaveOverdueDetails',
//     component: () => import('../views/leaveOvertime/audit/auditState/leaveApproval/LeaveOverdueDetails.vue'),
//   },
//   {
//     path: '/covid19OverdueDetails/:id',
//     name: 'covid19OverdueDetails',
//     component: () => import('../views/leaveOvertime/audit/auditState/covid19LeaveApproval/covid19OverdueDetails.vue'),
//   },
//   {
//     path: '/covid19ApprovaledDetails/:id',
//     name: 'Covid19ApprovaledDetails',
//     component: () =>
//       import('../views/leaveOvertime/audit/auditState/covid19LeaveApproval/Covid19ApprovaledDetails.vue'),
//   },
//   {
//     path: '/invalidcovid19ApprovaledDetails/:id',
//     name: 'InvalidCovid19ApprovaledDetails',
//     component: () =>
//       import('../views/leaveOvertime/audit/auditState/covid19LeaveApproval/InvalidCovid19ApprovaledDetails.vue'),
//   },
//   {
//     path: '/invalidCovid19OverdueDetails/:id',
//     name: 'InvalidCovid19OverdueDetails',
//     component: () =>
//       import('../views/leaveOvertime/audit/auditState/covid19LeaveApproval/InvalidCovid19OverdueDetails.vue'),
//   },
//   //销假审核
//   {
//     path: '/cancelLeaveList/:id',
//     name: 'CancelLeaveList',
//     component: () => import('../views/leaveOvertime/audit/auditState/cancelLeaveApproval/LeaveApprovalList.vue'),
//   },
//   {
//     path: '/cancelLeavePendingApprovalDetails/:id',
//     name: 'CancelLeavePendingApprovalDetails',
//     component: () =>
//       import('../views/leaveOvertime/audit/auditState/cancelLeaveApproval/LeavePendingApprovalDetails.vue'),
//   },
//   {
//     path: '/cancelLeaveApprovedDetails/:id',
//     name: 'cancelLeaveApprovedDetails',
//     component: () => import('../views/leaveOvertime/audit/auditState/cancelLeaveApproval/LeaveApprovedDetails.vue'),
//   },
//   {
//     path: '/cancelLeaveOverdueDetails/:id',
//     name: 'cancelLeaveOverdueDetails',
//     component: () => import('../views/leaveOvertime/audit/auditState/cancelLeaveApproval/LeaveOverdueDetails.vue'),
//   },
//   // 疫情封控上报审核
//   {
//     path: '/covidApprovalList/:id',
//     name: 'CovidApprovalList',
//     component: () => import('../views/leaveOvertime/audit/auditState/covid19LeaveApproval/Covid19ApprovalList.vue'),
//   },
//   //病假证明审核
//   {
//     path: '/sickLeaveCertificate/:id',
//     name: 'SickLeaveCertificate',
//     component: () =>
//       import('../views/leaveOvertime/audit/auditState/sickLeaveCertificate/SickLeaveCertificateList.vue'),
//   },
//   {
//     path: '/certificatePendingDetails/:id',
//     name: 'CertificatePendingDetails',
//     component: () =>
//       import('../views/leaveOvertime/audit/auditState/sickLeaveCertificate/CertificatePendingDetails.vue'),
//   },
//   {
//     path: '/certificatedDetails/:id',
//     name: 'CertificatedDetails',
//     component: () => import('../views/leaveOvertime/audit/auditState/sickLeaveCertificate/CertificatedDetails.vue'),
//   },
//   {
//     path: '/certificateOverdueDetails/:id',
//     name: 'CertificateOverdueDetails',
//     component: () =>
//       import('../views/leaveOvertime/audit/auditState/sickLeaveCertificate/CertificateOverdueDetails.vue'),
//   },
//   //督导请假
//   {
//     path: '/checkerLeaveApply',
//     name: 'CheckerLeaveApply',
//     component: () => import('../views/leaveOvertime/checkerApply/CheckerLeaveApply2.vue'),
//   },
//   {
//     path: '/checkerApplyList',
//     name: 'CheckerApplyList',
//     component: () => import('../views/leaveOvertime/checkerApply/CheckerApplyList.vue'),
//   },
//   {
//     path: '/checkerUploadSickLeaveMaterial/:id',
//     name: 'CheckerUploadSickLeaveMaterial',
//     component: () => import('../views/leaveOvertime/checkerApply/CheckerUploadSickLeaveMaterial.vue'),
//   },
//   {
//     path: '/checkerSickLeaveList',
//     name: 'CheckerSickLeaveList',
//     component: () => import('../views/leaveOvertime/checkerApply/CheckerSickLeaveList.vue'),
//   },
//   {
//     path: '/scheduleApply',
//     name: 'ScheduleApply',
//     component: () => import('../views/schedule/apply/ScheduleApply.vue'),
//     // meta: { check: true },
//   },
//   {
//     path: '/moreScheduleApply',
//     name: 'MoreScheduleApply',
//     component: () => import('../views/schedule/apply/MoreScheduleApply.vue'),
//     // meta: { check: true },
//   },
//   //排班审核
//   {
//     path: '/scheduleAudit/auditList/:id',
//     name: 'scheduleAuditList',
//     component: () => import('../views/schedule/audit/ScheduleAuditList'),
//   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   //meta 设置未check时校验是否存在openid empPk 有一个不存在就拦截
//   if (to.meta.check && (!checkStorage('openId') || !checkStorage('empPk'))) {
//     Toast.fail({
//       message: '未获取到登录信息',
//       duration: 6000,
//     });
//   } else {
//     next();
//   }
// });

export default router;
