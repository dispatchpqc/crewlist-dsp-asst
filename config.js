// Cấu hình riêng của bạn — file này KHÔNG bị ghi đè khi cập nhật schedule.html
window.SUNPQ = {
  feedbackEndpoint: 'https://crewlist-feedback.dispatch-pqc.workers.dev', // Worker báo lỗi
  icsEndpoint: 'https://roster-ics.dispatch-pqc.workers.dev',             // Worker lịch cá nhân (bỏ trống nếu chưa dùng)
  offEndpoint: 'https://script.google.com/macros/s/AKfycbxsayS6Djo3fDcxLlHUnCLYBOBOo6yznRyleQE0wwj5VozUVqLiIdr43pzeTMkuy5E/exec'             // Máy chủ đăng ký off (Google Apps Script)
};
