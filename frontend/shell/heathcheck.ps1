vegeta attack -targets="healthcheck.txt" -duration=30s -rate=100/s -output="healthcheck.gob"
vegeta report "healthcheck.gob"
vegeta plot "healthcheck.gob" > plot.html