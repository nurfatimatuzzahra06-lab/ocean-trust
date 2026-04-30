// Tracking functionality extracted from index.html
function trackContainer() {
    const result = document.getElementById('trackingResult');
    result.innerHTML = `
        <div class="text-center">
            <div class="spinner-border text-primary mb-3" role="status"></div>
            <div>Mengambil data pelacakan...</div>
        </div>
    `;
    setTimeout(() => {
        result.innerHTML = `
            <div class="row mb-3">
                <div class="col-6">
                    <small class="text-muted">Kapal:</small>
                    <div class="fw-bold">MV ANALITIKA 01</div>
                </div>
                <div class="col-6">
                    <small class="text-muted">Status:</small>
                    <span class="badge bg-success">Dalam Pelayaran</span>
                </div>
            </div>
            <div class="timeline-simple mb-3">
                <div class="timeline-item">
                    <div class="timeline-dot done"></div>
                    <div>Jakarta (25 Apr 09:00)</div>
                </div>
                <div class="timeline-item active">
                    <div class="timeline-dot active"></div>
                    <div>Laut Jawa <small>(5.9°S 106.8°E)</small></div>
                    <div class="spinner-border spinner-border-sm ms-2" role="status"></div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div>Surabaya (01 Mei ETA)</div>
                </div>
            </div>
            <div class="text-center mt-3">
                <small class="text-muted">Real-time via AIS Satelit</small>
            </div>
        `;
    }, 1500);
}

