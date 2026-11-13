// Cấu hình riêng của bạn — file này KHÔNG bị ghi đè khi cập nhật schedule.html
window.SUNPQ = {
  feedbackEndpoint: 'https://crewlist-feedback.dispatch-pqc.workers.dev', // Worker báo lỗi
  icsEndpoint: 'https://roster-ics.dispatch-pqc.workers.dev',             // Worker lịch cá nhân (bỏ trống nếu chưa dùng)
  offEndpoint: 'https://script.google.com/macros/s/AKfycbyEyJOz-QKYim4ExLUJy83yH8RDMbdnyytuU3CAsWWDCxXVjaz5d_nHcfAJla1m9N4/exec'             // Máy chủ đăng ký off (Google Apps Script)
};
